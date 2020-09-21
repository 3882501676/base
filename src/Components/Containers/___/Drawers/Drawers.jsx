// import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
// //import { Test } from './Drawers.styles';
// import AppContext from "../../../../Util/Context/context.js";
// import { Drawer } from "antd";

// class Drawers extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasError: false,
//     };
//   }

//   componentWillMount = () => {
//     console.log("Drawers will mount");
//   };

//   componentDidMount = () => {
//     console.log("Drawers mounted");
//   };

//   componentWillReceiveProps = (nextProps) => {
//     console.log("Drawers will receive props", nextProps);

//     console.log('Drawer 0 status ---> ',this.context.self.state.d[0])


//   };

//   componentWillUpdate = (nextProps, nextState) => {
//     console.log("Drawers will update", nextProps, nextState);
//   };

//   componentDidUpdate = () => {
//     console.log("Drawers did update");

//     console.log('Drawer 0 status ---> ',this.context.self.state.d[0])


//   };

//   componentWillUnmount = () => {
//     console.log("Drawers will unmount");
//   };

//   render() {

//     let { active } = this.props


//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return (
//       <div className=" db relative z-9999 ">
//         <Drawer
//           title="Parent"
//           width={600}
//           closable={true}
//           onClose={() => {
//             this.context.self.state.d[0] = false;

//             self.self.setState({
//               d: this.context.self.state.d
//             });
//           }}
//           visible={ this.props.active[0] }
//         >

//           <d_components.a />

//           <Drawer
//             title="Child"
//             width={500}
//             closable={true}
//             onClose={() => {
//               this.context.self.state.d[1] = false;

// self.self.setState({
//   d: this.context.self.state.d
// });
//             }}
//             visible={ this.props.active[1] }
//           >

//             <d_components.a_ />

//             <Drawer
//               title="Child Child "
//               width={550}
//               closable={true}
//               onClose={() => {
//                 this.context.self.state.d[2] = false;

// self.self.setState({
//   d: this.context.self.state.d
// });
//               }}
//               visible={  this.props.active[2]  }
//             >

//               <d_components.a__ />

//             </Drawer>
//           </Drawer>
//         </Drawer>
//       </div>
//     );
//   }
// }

// Drawers.propTypes = {
//   // bla: PropTypes.string,
// };

// Drawers.defaultProps = {
//   // bla: 'test',
// };

// export default Drawers;

// Drawers.contextType = AppContext;
