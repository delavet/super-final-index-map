import { createStore } from 'redux'
import { mapRef } from '../map/Map.js'
import { enDistrictMap, enRegionMap, regions , districtRegionMap, colorPool} from '../Constants.js'
//import history from '../history'
import axios from 'axios'
//import { random } from 'gl-matrix/src/gl-matrix/vec2'
//import '../createWS'


//window.loadBDWareWebSDK("ws://39.106.6.6:8080/SCIDE/SCExecutor",function(){},function(){});


const defaultState = {
  collapse: true,
  searchInput: '',
  searchDone: false,
  showHeatmapPane: false,
  regionName: 'default',
  latLng: '0,0',
  map: {
    heatLayerId: 'trees-heat',
    type: null
  },
  index: {
    popularity: 0,
    menu: 0,
    access: 0,
    quality: 0,
    after_sale: 0
  }
}

const translateDistrict = name => enDistrictMap[name];
const translateRegion = name => enRegionMap[name];


const mapIdPool = new Set()

const indexReducer = (state, action) => {
  switch (action.type) {
    case 'load-popularity-index': {
      console.log('load-popularity-index', state)
      return Object.assign({}, state, {
        popularity: action.payload.popularity
      })
    };
    case 'load-menu-index': {
      console.log('load-menu-index', state)
      return Object.assign({}, state, {
        menu: action.payload.menu
      })
    };
    case 'load-access-index': {
      console.log('load-access-index', state)
      return Object.assign({}, state, {
        access: action.payload.access
      })
    }
    case 'load-quality-index': {
      console.log('load-quality-index', state, action.payload.quality)
      const nextState = Object.assign({}, state, {
        quality: action.payload.quality
      })
      console.log('nextState', nextState)
      return nextState
    }
    case 'load-after-sale-index': {
      console.log('load-after-sale-index', state)
      return Object.assign({}, state, {
        after_sale: action.payload.after_sale
      })
    }
    default: return state
  }
}

const mapReducer = async (state, action) => {
  switch (action.type) {
    case 'ADD_HEATMAP_LAYER': {
      mapRef.addSource('weibos', {
        type: 'geojson',
        data: `/data/weibo_${action.payload.type}.geojson`
      });

      state.type = action.payload.type

      // mapIdPool.add('weibo-heat')
      mapRef.addLayer({
        id: 'weibo-heat',
        type: 'heatmap',
        source: 'weibos',
        maxzoom: 15,
        paint: {
          // increase intensity as zoom level increases
          'heatmap-intensity': {
            stops: [
              [5, 0.015],
              [15, 0.025]
            ]
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(236,222,239,0)',
            0.2, 'rgb(208,209,230)',
            0.4, 'rgb(166,189,219)',
            0.6, 'rgb(103,169,207)',
            0.8, 'rgb(28,144,153)'
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [
              [11, 15],
              [15, 20]
            ]
          },
          // decrease opacity to transition into the circle layer
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1], // 14 是大
              [15, 0]  // 15 是小图
            ]
          },
        }
      }, 'waterway-label');
 
      mapRef.addLayer({
        id: 'weibo-point',
        type: 'circle',
        source: 'weibos',
        minzoom: 14,
        paint: {
          'circle-color': 'rgba(236,222,239,0)',
          'circle-stroke-color': 'white',
          'circle-stroke-width': 1,
          'circle-opacity': {
            stops: [
              [14, 0],
              [15, 1]
            ]
          }
        }
      }, 'waterway-label');

      return Object.assign({}, state, {
        type: action.payload.type
      })
    }
    case 'REMOVE_MAP_LAYER': {
      mapRef.removeLayer(action.payload.id)
      return state
    }
    case 'REMOVE_MAP_SOURCE': {
      mapRef.removeSource(action.payload.id)
      return state
    }
    case 'RESET_MAP': {
      return state
    }
    case 'ADD_BEIJING_LAYER': {
      console.log('add_beijing_layer')
      let res = await axios.get('/data/region/beijing_complete.json')
      debugger
      /*
      window.executeContract("Food_consume_index", "loadResource", "/data/region/beijing_complete.json", function(data) {
        var result = JSON.parse(data.result);
        mapRef.addSource('beijing_source', {
          type: 'geojson',
          data: result
        })
        mapRef.addLayer({
          "id": 'beijing',
          "type": "fill",
          "source": 'beijing_source',
          "layout": {},
          "paint": {
            "fill-color": "#00A1F1",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.5,
              0.1
            ]
          }
        })
        
        mapRef.addLayer({
          'id': 'beijing-lines',
          'type': 'line',
          'source': "beijing_source",
          "layout": {
            "line-join": "round",
            "line-cap": "round"
          },
          "paint": {
            "line-color": "#627BC1",
            "line-width": 1
          }
        })
      })*/
      mapRef.addSource('beijing_source', {
        type: 'geojson',
        data: res.data
      })
      mapRef.addLayer({
        "id": 'beijing',
        "type": "fill",
        "source": 'beijing_source',
        "layout": {},
        "paint": {
          "fill-color": "#00A1F1",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.5,
            0.1
          ]
        }
      })
      
      mapRef.addLayer({
        'id': 'beijing-lines',
        'type': 'line',
        'source': "beijing_source",
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#627BC1",
          "line-width": 1
        }
      })
      /*
      let hoverDistrictId = null
      mapRef.on("mousemove", "beijing", e => {
        if (e.features.length > 0) {
          if (hoverDistrictId !== null) {
            mapRef.setFeatureState({
              source: "beijing_source",
              id: hoverDistrictId
            }, {
              hover: false
            });
          }
          hoverDistrictId = e.features[0].id;
          mapRef.setFeatureState({
            source: "beijing_source",
            id: hoverDistrictId
          }, {
            hover: true
          });
        }
      })*/
      
      return state
    }
    case 'REMOVE_BEIJING_LAYER': {
      mapRef.removeLayer('beijing')
      mapRef.removeLayer('beijing-lines')
      mapRef.removeSource('beijing_source')
      return state
    }
    case 'ADD_REGION_LAYER': {
      let center = JSON.parse(action.payload.center);
      let distName = action.payload.name;
      //let enDistName = 
      mapRef.setCenter(center);
      mapRef.setZoom(11);
      /*
      //先把热力图去掉吧，节省性能
      let point_res = await axios.get('/data/' + distName + '/shop_points.json')

      
      mapRef.addSource(distName + '_shop_points', {
        type: 'geojson',
        data: point_res.data
      });

      // mapIdPool.add('weibo-heat')
      mapRef.addLayer({
        id: distName + '_shop_heat',
        type: 'heatmap',
        source: distName + '_shop_points',
        maxzoom: 15,
        paint: {
          // increase intensity as zoom level increases
          'heatmap-intensity': {
            stops: [
              [5, 0.015],
              [15, 0.025]
            ]
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(236,222,239,0)',
            0.2, '#e1ac48',
            0.4, '#e19d48',
            0.6, '#e18648',
            0.8, '#e36049'
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [
              [11, 15],
              [25, 30]
            ]
          },
          // decrease opacity to transition into the circle layer
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1], // 14 是大
              [15, 0]  // 15 是小图
            ]
          },
        }
      }, 'waterway-label');*/
      let getFileName = data => {
        return data.substring(0,data.indexOf("."));
      };
      let myRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      let colorId = 0;
      debugger
      for (let regionJsonName of districtRegionMap[distName]) {
        let regionName = getFileName(regionJsonName);
        let real_file_path = '/data/' + translateDistrict(distName) + '/' + translateRegion(regionJsonName)
        /*
        window.executeContract("Food_consume_index", "loadResource", real_file_path, function(data) {
          var result = JSON.parse(data.result);
          mapRef.addSource(regionName + '_source', {
            type: 'geojson',
            data: result
          });
          mapRef.addLayer({
            "id": regionName,
            "type": "fill",
            "source": regionName + '_source',
            "layout": {},
            "paint": {
              "fill-color": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                "#ffffff",
                colorPool[colorId]
              ],
              "fill-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                0.1,
                0.7
              ]
            }
          });
          colorId = myRandom(0, 35);
        })*/
        let res = await axios.get(real_file_path);
        mapRef.addSource(regionName + '_source', {
          type: 'geojson',
          data: res.data
        });
        mapRef.addLayer({
          "id": regionName,
          "type": "fill",
          "source": regionName + '_source',
          "layout": {},
          "paint": {
            "fill-color": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              "#ffffff",
              colorPool[colorId]
            ],
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.1,
              0.7
            ]
          }
        });
        colorId = myRandom(0, 35);
      }
      /*
      axios
        .get('/data/region/rec_region.json')
        .then(res => {
          
          
        })*/
      return state         
    }
    default: return state
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'input-search': return Object.assign({}, state, { searchInput: action.payload })
    case 'search-done': return Object.assign({}, state, { searchDone: true })
    case 'search-undone': return Object.assign({}, state, { searchDone: false })
    case 'toggle-menu': return Object.assign({}, state, { collapse: !state.collapse })
    case 'close-heatmap-pane': return Object.assign({}, state, { showHeatmapPane: false })
    case 'open-heatmap-pane': return Object.assign({}, state, { showHeatmapPane: true })
    case 'set-region-name': return Object.assign({}, state, { regionName: action.payload})
    case 'set-lat-lng': return Object.assign({}, state, { latLng: `${action.payload.lat}, ${action.payload.lng}`})
    case 'ADD_HEATMAP_LAYER': {
      return Object.assign({}, state, { map: mapReducer(state.map, action) })
    }
    case 'REMOVE_MAP_LAYER': {
      return Object.assign({}, state, { map: mapReducer(state.map, action) })
    }
    case 'REMOVE_MAP_SOURCE': {
      return Object.assign({}, state, { map: mapReducer(state.map, action) })
    }
    case 'ADD_BEIJING_LAYER': {
      return Object.assign({}, state, { map: mapReducer(state.map, action) })
    }
    case 'REMOVE_BEIJING_LAYER': {
      return Object.assign({}, state, { map: mapReducer(state.map, action) })
    }
    case 'ADD_REGION_LAYER': {
      return Object.assign({}, state, { map: mapReducer(state.map, action) })
    }
    case 'load-popularity-index': {
      return Object.assign({}, state, { index: indexReducer(state.index, action) })
    }
    case 'load-menu-index': {
      return Object.assign({}, state, { index: indexReducer(state.index, action)})
    }
    case 'load-access-index': {
      return Object.assign({}, state, { index: indexReducer(state.index, action)})
    }
    case 'load-quality-index': {
      return Object.assign({}, state, { index: indexReducer(state.index, action)})
    }
    case 'load-after-sale-index': {
      return Object.assign({}, state, { index: indexReducer(state.index, action)})
    }
    default: return state
  }
}

const store = createStore(reducer)

export default store