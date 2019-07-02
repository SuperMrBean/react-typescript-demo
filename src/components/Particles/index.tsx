import React,{Component} from 'react';
import Particles from 'react-particles-js';
class Particle extends Component {
  render() {
      return (
        <Particles params={{
					"particles": {
						"number": {
							"value": 450,
							"density": {
								"enable": false
							}
						},
						"size": {
							"value": 3.5,
							"random": true,
							"anim": {
								"speed": 5,
								"size_min": 0.3
							}
						},
						"line_linked": {
							"enable": false
						},
						"move": {
							"random": true,
							"speed": 1,
							"direction": "top",
							"out_mode": "out"
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "bubble"
							},
							"onclick": {
								"enable": true,
								"mode": "repulse"
							}
						},
						"modes": {
							"bubble": {
								"distance": 250,
								"duration": 2,
								"size": 0,
								"opacity": 0
							},
							"repulse": {
								"distance": 250,
								"duration": 1
							}
						}
					}
				}} />
      );
  }
}
export default Particle