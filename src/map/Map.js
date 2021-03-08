import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import history from '../history'
import {regions, districtRegionMap} from '../Constants'

let mapRef = null

let dummyQualityMap = {}

const myRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};


class Map extends Component {
  constructor (props) {
    super(props)
    this.paint = this.paint.bind(this)
    this.map = null
    this.addCallbackOfRegion = this.addCallbackOfRegion.bind(this)
    // this.path = this.props.location.pathname
  }
  componentDidMount () {
    this.paint()
  }

  addCallbackOfRegion(name) {
    let hoverRegionId = null
    var popup = new mapboxgl.Popup({
      closeButton: false
    });
    let getFileName = data => {
      return data.substring(0,data.indexOf("."));
    };
    for (let regionJsonName of districtRegionMap[name]) {
      let regionName = getFileName(regionJsonName);
      this.map.on("mouseenter", regionName, e => {
        if (e.features.length > 0) {
          if (hoverRegionId !== null) {
            this.map.setFeatureState({source: regionName + '_source', id: hoverRegionId }, { hover: false });
          }
          hoverRegionId = e.features[0].id;
          this.map.setFeatureState({source: regionName + '_source', id: hoverRegionId }, { hover: true });
          let feature = e.features[0];
          console.log(feature.properties);
          this.props.setLatLng(e.lngLat.lat, e.lngLat.lng);
          this.props.setRegionName(feature.properties.bisiness_8);
          popup.setLngLat(e.lngLat).setHTML("<h5>" + feature.properties.bisiness_8 + "</h5>").addTo(this.map);
          debugger
          let regionSource = this.map.getSource(feature.source)._data;
          let props = regionSource["properties"]
          
          this.props.setPopularityIndex(props.popular_indexes);
          this.props.setMenuIndex(props.region_menu_indexes);
          this.props.setAccessIndex(props.access_convenient_indexes);
          let dummyQuality = props.popular_indexes < 0.05 ? 0 : props.popular_indexes + myRandom(-0.04, 0.13);
          if (dummyQualityMap[feature.properties.bisiness_8] == undefined) {
            dummyQualityMap[feature.properties.bisiness_8] = dummyQuality;
          }else {
            dummyQuality = dummyQualityMap[feature.properties.bisiness_8]
          }
          if (props.quality_indexes) {
            dummyQuality = props.quality_indexes;
          }
          this.props.setQualityIndex(dummyQuality);
        }
      });
      /*
      this.map.on("mouseleave", regionName, function() {
        if (hoverRegionId) {
          mapRef.setFeatureState({source: regionName + '_source', sourceLayer: regionName, id: hoverRegionId }, { hover: false });
          popup.remove();
        }
        hoverRegionId =  null;
      });*/
      this.map.on('click', regionName, e => {
        let feature = e.features[0];
        this.props.setRegionName("region: " + feature.properties.id);
        this.props.setPopularityIndex(feature.properties.popular_indexes);
        this.props.setMenuIndex(feature.properties.region_menu_indexes);
        this.props.setAccessIndex(feature.properties.access_convenient_indexes);
        /*
        let dummyQuality =  feature.properties.popular_indexes < 0.05 ? 0 : feature.properties.popular_indexes + myRandom(-0.04, 0.13);
        if (dummyQualityMap[feature.properties.id] == undefined) {
          dummyQualityMap[feature.properties.id] = dummyQuality;
        }else {
          dummyQuality = dummyQualityMap[feature.properties.id]
        }
        if (feature.properties.quality_indexes) {
          dummyQuality = feature.properties.quality_indexes;
        }*/ 
        this.props.setQualityIndex(feature.properties.quality_indexes);
        this.props.setAfterSaleIndex(feature.properties.after_sale_indexes);
        this.props.setLatLng(e.lngLat.lat, e.lngLat.lng)
      });
    }
  }

  paint () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsYXZldCIsImEiOiJja2F1bmN0ZDQwNDkxMnlwaWRmbmgwdWo2In0.4HTQ8z3Oo7YehhiSVSh7fg';
    new Promise((res, rej) => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [116.4, 39.9],
        zoom: 8
      });
      map.on('load', () => {
        this.map = map
        mapRef = map
        this.props.addBeijingLayer()
        /*this.props.addRegionLayer()*/
        res(map)
      });
    })
    .then(map => {
      map.on("click", "beijing", e => {
        if (e.features.length > 0) {
          const location = e.features[0].properties.name;
          history.push(`/indexdetail/${location}`);
          this.props.removeBeijingLayer();
          let feature = e.features[0];
          let distName = feature.properties.name;
          let center = feature.properties.centroid;
          this.props.addRegionLayer(distName, center)
          this.addCallbackOfRegion(distName)
          
        }
      })
      let hoverDistrictId = null;
      map.on("mousemove", "beijing", e => {
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
          let feature = e.features[0];
          this.props.setRegionName(feature.properties.name);
          this.props.setPopularityIndex(feature.properties.popular_indexes);
          this.props.setMenuIndex(feature.properties.region_menu_indexes);
          this.props.setAccessIndex(feature.properties.access_convenient_indexes);
          this.props.setLatLng(feature.properties.center[0], feature.properties.center[1]);
          this.props.setQualityIndex(feature.properties.quality_indexes);
          this.props.setAfterSaleIndex(feature.properties.after_sale_indexes);
        }
      })
      return
      let hoverRegionId = null
      var popup = new mapboxgl.Popup({
        closeButton: false
      });
      for (let item of regions) {
        map.on("mousemove", item[0], e => {
          if (e.features.length > 0) {
            if (hoverRegionId !== null) {
              map.setFeatureState({source: item[0] + '_source', id: hoverRegionId }, { hover: false });
            }
            hoverRegionId = e.features[0].id;
            map.setFeatureState({source: item[0] + '_source', id: hoverRegionId }, { hover: true });
            let feature = e.features[0];
            console.log(feature.properties);
            debugger
            this.props.setLatLng(e.lngLat.lat, e.lngLat.lng);
            this.props.setRegionName(feature.properties.bisiness_8);
            popup.setLngLat(e.lngLat).setHTML("<h5>" + feature.properties.bisiness_8 + "</h5><p>" + JSON.stringify(e.lngLat) + "</p>").addTo(map);
          }
        });
        map.on("mouseleave", item[0], function() {
          if (hoverRegionId) {
            mapRef.setFeatureState({source: item[0] + '_source', sourceLayer: item[0], id: hoverRegionId }, { hover: false });
            popup.remove();
          }
          hoverRegionId =  null;
        });
        
      }
      map.on('click', '海淀区', e => {
        let feature = e.features[0];
        this.props.setRegionName(feature.properties.bisiness_8);
        this.props.setPopularityIndex(feature.properties.popular_indexes);
        this.props.setMenuIndex(feature.properties.region_menu_indexes);
        this.props.setAccessIndex(feature.properties.access_convenient_indexes);
        
      });
      
    })
  }
  render () {
    return <div id="map" style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }}></div>
  }
}

Map = withRouter(connect(
  state => {
    return {
      heatLayerId: state.map.heatLayerId
    }
  },
  (dispatch) => {
    return {
      addHeatLayerId: (id) => {
        console.log({
          type: 'set-map-heat-layer-id',
          payload: {
            id: id
          }
        })
        dispatch({
          type: 'set-map-heat-layer-id',
          payload: {
            id: id
          }
        })
      },
      addRegionLayer (name, center) {
        dispatch({
          type: 'ADD_REGION_LAYER',
          payload: {
            name: name,
            center: center
          }
        })
      },
      addBeijingLayer() {
        dispatch({
          type: 'ADD_BEIJING_LAYER'
        })
      },
      removeBeijingLayer() {
        dispatch({
          type: 'REMOVE_BEIJING_LAYER'
        })
      },
      setRegionName: (name) => {
        dispatch({
          type: 'set-region-name',
          payload: name
        })
      },
      setLatLng: (alat, alng) => {
        dispatch({
          type: 'set-lat-lng',
          payload: {
            lat: alat,
            lng: alng
          }
        })
      },
      setPopularityIndex: (p) => {
        dispatch({
          type: 'load-popularity-index',
          payload: {
            popularity: p
          }
        })
      },
      setMenuIndex: (p) => {
        dispatch({
          type: 'load-menu-index',
          payload: {
            menu: p
          }
        })
      },
      setAccessIndex: (p) => {
        dispatch({
          type: 'load-access-index',
          payload: {
            access: p
          }
        })
      },
      setQualityIndex: (p) => {
        dispatch({
          type: 'load-quality-index',
          payload: {
            quality: p
          }
        })
      },
      setAfterSaleIndex: (p) => {
        dispatch({
          type: 'load-after-sale-index',
          payload: {
            after_sale: p
          }
        })
      }
    }
  }
)(Map))

export { Map, mapRef } 