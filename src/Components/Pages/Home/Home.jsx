import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Home.styles';
import AppContext from '../../../Util/Context/context.js'
const items = [
  {
    title: 'Sample',
    description: 'Sample',
    media: [
      {
        url: '/img/sample.jpg'
      }
    ]
  },
  {
    title: 'Sample',
    description: 'Sample',
    media: [
      {
        url: '/img/sample.jpg'
      }
    ]
  },
  {
    title: 'Sample',
    description: 'Sample',
    media: [
      {
        url: '/img/sample.jpg'
      }
    ]
  },
  {
    title: 'Sample',
    description: 'Sample',
    media: [
      {
        url: '/img/sample.jpg'
      }
    ]
  },
  {
    title: 'Sample',
    description: 'Sample',
    media: [
      {
        url: '/img/sample.jpg'
      }
    ]
  }
]


class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      items: items
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render() {


    const { actions, data, state, device } = this.context

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }


    return (
      <div className="HomeWrapper sans-serif f2 fw7 black ph5 pv4 ">

        <SearchResults self={this} />

        <Items self={this} />

      </div>
    )
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
Home.contextType = AppContext


const Items = ({ self }) => (

  <section id="Items" className=" flex flex-row flex-wrap justify-between col4 w-100 " >

    {self.state.items.map((item, index) => (
      <Item self={self} item={item} index={index} />
    ))
    }

  </section>

)

const Item = ({ self, item, index }) => (
  <div
    id={"Item-" + index}
    key={index}
    className=" pointer dim flex flex-row justify-between ba b--black-05 br1 "
    style={{
      marginBottom: '3vh'
    }}
  >
    <div className="flex flex-column pa4 w-50">

      <div className="flex f5 fw6 black-80 mb2">
        {item.title}
      </div>

      <div className="flex f5 fw4 black-50">
        {item.description}
      </div>

    </div>

    <div className="flex flex-column w-50">
     
      <div 
      style={{ background: 'url('+ item.media[0].url +')'}}
      className="bg-cover bg-center w-100 h-100" />

    </div>

  </div>
)

const SearchResults = ({ self }) => (
  <section

    id=""

    className="flex flex-column f5 fw5 black pv4"

    style={{

    }}
  >


    {"No results"}

  </section>
)