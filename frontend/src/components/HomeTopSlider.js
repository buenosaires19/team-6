import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import './HomeTopSlider.css';


class HomeTopSlider extends React.Component {

    componentWillMount() {
      this.setState({
        children: [],
        activeItemIndex: 0,
      });
  
      setTimeout(() => {
        this.setState({
          children: this.createChildren(20),
        })
      }, 100);
    }
  
    createChildren = n => range(n).map(this.createChildrenId);
  
    createChildrenId = (i) => 
        <div className="imagen-carousel" key={i} style={
            {  backgroundImage: "url(http://placekitten.com/1000/700)" }
            }>
            {i}
        </div>

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
  
    render() {
      const {
        activeItemIndex,
        children,
      } = this.state;
  
      return (
        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#eee' }}>Placeholder</div>}
  
          // Carousel configurations
          numberOfCards={1}
          gutter={0}
          showSlither={true}
          firstAndLastGutter={false}
          freeScrolling={false}
  
          // Active item configurations
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
  
          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {children}
        </ItemsCarousel>
      );  
    }
  } 


export default HomeTopSlider;