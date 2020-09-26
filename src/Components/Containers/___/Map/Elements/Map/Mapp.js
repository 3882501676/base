import React from 'react'
import { randomPoint } from '@turf/random';
import MapGL, { Source, Layer, Image, Marker, GeolocateControl, NavigationControl, ScaleControl, Filter } from '@urbica/react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder'
import Cluster from '@urbica/react-map-gl-cluster';
import { setimage } from './Actions'
import { Popover } from 'antd'
import MarkerIcon from '../../../../../../Assets/icons/location-pin.svg'

import { AppContext, config } from 'utils'
// import util from 'utils'

import './style.css'
import 'mapbox-gl/dist/mapbox-gl.css';

// const { AppContext } = context
// console.log('Util ---> ', util ) 
console.log('Config ---> ', config ) 

const MAPBOX_ACCESS_TOKEN = config.api.keys.mapbox
const mapAccess = {
    mapboxApiAccessToken: MAPBOX_ACCESS_TOKEN
}

const bbox = [-160, -70, 160, 70];
const points = randomPoint(50, { bbox }).features;
points.forEach((point, index) => (point.id = index));

const initialState = {
    viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 0,

    }
};

const style = {
    width: 'auto',
    height: 'auto',
    color: '#fff',
    background: '#1978c8',
    borderRadius: '100px',
    textAlign: 'center',
    border: '4px solid white',
    padding: '2rem'

};

const ClusterMarker = ({ longitude, latitude, pointCount }) => (
    <Marker longitude={longitude} latitude={latitude}>
        <div className="cluster-marker ">{pointCount}</div>
    </Marker>
);

class Mapp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            viewport: {
                latitude: props && props.location && props.location.lat || "",
                longitude: props && props.location && props.location.lon || "",
                zoom: 20,
                pitch: 40
            },
            service: 'therapy',
            filter: 'therapy',
            activeMarker: {
                coordinates: [0, 0]
            }
        }
        this.setImage = this.setImage.bind(this)
        this.geocodeSelectResult = this.geocodeSelectResult.bind(this)
        this.onMapMove = this.onMapMove.bind(this)

        this.mapRef = React.createRef()

        // console.log('Mapp props ', this.props)
    }


    setImage(point) {

        const image = setimage({ self: this, item: { fields: point.properties } })

        // console.log('setImage : image --< ', image)

        return image

    }

    geocodeSelectResult(a) {

        console.log(a)
        let viewport = this.state.viewport
        viewport.latitude = a.latitude
        viewport.longitude = a.longitude

        viewport.zoom = 12

        console.log(this.mapRef)

        // this.mapRef.flyTo({
        //     center: [a.longitude, a.latitude],
        //     zoom: 9,
        //     speed: 0.2,
        //     curve: 1,
        //     easing(t) {
        //     return t;
        //     }
        //     });
        this.setState({
            viewport: viewport,
            activeMarker: {
                coordinates: [a.latitude, a.longitude]
            }
        })
    }

    onMapMove() {

        const viewport = this.state.viewport
        // 
        // let bounds = viewport.getBounds()
        
        // console.log('bounds', bounds )

        // this.context.actions.filterProvidersByDistance({ viewport })

    }

    componentDidMount(){

        // this.mapRef.on('moveend', function (e) {
            
        //     console.log(`Current Map Center: ${this.mapRef.getCenter()}`)

        //     // marker.setLngLat(map.getCenter());
        // });

        // alert()
    }

    render() {

        const { points } = this.props

        const mapitems = points && points.length ? points : []

        console.log('POints ===:> ', mapitems )

        // console.log('Viewport Mapp ', this.state.viewport)

        const image = 'https://static.vecteezy.com/system/resources/previews/000/599/219/non_2x/vector-abstract-yellow-triangles-random-pattern-on-white-background.jpg'

        return (

            <MapGL
                ref={this.mapRef}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle2='mapbox://styles/mapbox/light-v9'
                // mapStyle="mapbox://styles/mapbox/dark-v9"
                // mapStyle={'mapbox://styles/quantacom/ckd6na75l04fx1ipfl9chuy24'}
                mapStyle={'mapbox://styles/quantacom/ckaybclcf07vz1io78r65qjmx'}
                accessToken={MAPBOX_ACCESS_TOKEN}
                onViewportChange={viewport => { 

                    this.setState({ viewport })
                
                    console.log('viewport ---> ',viewport)

                    this.onMapMove({ viewport })

                }}

                onMove={

                    (map) => { 
                        
                        console.log('map' , this.mapRef.current._map.getBounds() )

                        // const bounds = map.getBounds()
                        
                        // console.log('bounds', bounds )
                        
                        }

                }
                className="mapboxgl-map"
                viewportChangeMethod={'flyTo'}
       
                {...this.state.viewport}
            >
                <div className="fixed top-0 left-0">
                    <Popover content={<div className="relative bg-white z-9999 absolute bottom-0 left-0 ">

                        <button onClick={() => this.setState({ filter: 'therapy' })}>Therapy</button>
                        <button onClick={() => this.setState({ filter: 'food' })}>Food</button>
                        <button onClick={() => this.setState({ filter: 'masseuse' })}>Massage</button>
                    </div>} >
                        {"Filter by Service"}
                    </Popover>
                </div>
                
                <img src={MarkerIcon} />

                <Filter layerId='cluster' filter={['==', 'service', this.state.filterValue]} />

                {
                    this.state.activeMarker.length &&
                    <Marker
                    onClick={()=>{ alert()}}
                        // onClick={this.context.actions.selectprovider}
                        key={this.state.activeMarker.coordinates[0]}
                        latitude={this.state.activeMarker.coordinates[0]}
                        longitude={this.state.activeMarker.coordinates[1]}
                    >
                        <MarkerIcon />
                    </Marker>
                }


                        {/* console.log('Point --> ', point), */}

                <Cluster id="cluster" radius={20} extent={512} nodeSize={128} component={ClusterMarker}>
                    {mapitems.filter(a => a.properties.service === this.state.filter).map(point => (




                        <Marker
                            // onCLick={() => this.context.actions.selectProvider(point)}
                            // onClick={()=>{ alert()}}
                            key={point.properties.title}
                            latitude={point.geometry.coordinates[1]}
                            longitude={point.geometry.coordinates[0]}
                        >



                            <Popover 
                            //  onClick={()=>{ alert()}}
                            trigger={'hover'} placement={'right'} content={
                                <div className="flex pa3 bg-white black f5 fw6 relative">

                                    {point.properties.title}

                                </div>
                            } title={false}>

                                {/* <div className=" absolute top-0 left-0">
                        
                        <div className="marker-ring-inner w4 h4 round bw1 ba b--white"></div>
                     
                        
                        </div> */}
                                <div className=" absolute top-0 left-0">

                                    <div className="z-1 relative marker-ring-inner2 w4 h4 round bw1 ba b--white"></div>

                                </div>
                                <div
                                // onClick={()=>{ alert()}}
                                    onClick={() => this.context.actions.selectprovider({ type: 'provider', provider: { fields: point.properties } })}
                                    className={("service-" + point.properties.service) + (" z-9 relative hover-scale-up flex flex-column br3- round ba-bw1-b--white bg-cover bg-center bs-f ")}
                                    style={{

                                        height: '70px',
                                        width: '70px',
                                        backgroundImage: 'url("' + this.setImage(point) + '")',

                                    }}
                                >
                                    {/* <div className="f6 fw5 black ph2 pv1 br1-  round bs-e text-overflow absolute bg-white ">{point.properties.title}</div> */}


                                    <Image 
                                     onClick={()=>{ alert()}}
                                    id='my-image' image={this.setImage(point)} />

                                </div>
                            </Popover>



                        </Marker>

                    ))}
                </Cluster>

                <div className="fixed top-0 right-0">
                    <GeolocateControl position='top-right' trackUserLocation={true} showUserLocation={true} />
                </div>

                <div className="fixed top-0 right-0">
                    <NavigationControl showCompass showZoom pitch position='top-right' />
                </div>
                <div className="fixed top-0 right-0">
                    <ScaleControl unit='metric' position='bottom-right' />
                </div>
                <div style={{ zIndex: 0, transform: 'translate3d(0,0,0)' }} className="hover-slide-up btrr-2 btlr-2 w-100 fixed bottom-0 right-0 bg-white-">

                    {/* <Geocoder
        //   mapRef={this.mapRef}
        //   onViewportChange={this.handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        /> */}
                    <Geocoder
                        {...mapAccess} onSelected={this.geocodeSelectResult} viewport={this.state.viewport} hideOnSelect={false}
                    // queryParams={queryParams}
                    />
                </div>



            </MapGL>

        )
    }


}

export default Mapp
Mapp.contextType = AppContext