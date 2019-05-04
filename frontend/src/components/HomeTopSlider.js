import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import {Link} from 'react-router-dom';
import './HomeTopSlider.css';
import { Icon } from '@blueprintjs/core';


class HomeTopSlider extends React.Component {

    componentWillMount() {
      this.setState({
        children: [],
        activeItemIndex: 0,
      });

      setTimeout(() => {
        this.setState({
          children: this.createChildren(this.props.postulaciones),
        })
      }, 100);
    }

    createChildren = postulaciones => postulaciones.map(Slide);

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
          rightChevron={<Icon iconSize={32} icon={"arrow-right"}/>}
          leftChevron={<Icon iconSize={32} icon={"arrow-left"}/>}
          outsideChevron={false}
        >
          {children}
        </ItemsCarousel>
      );
    }
  }


const Slide = (postulacion, id) =>
    <div className="imagen-carousel" key={id} style={
        {backgroundImage:  `url(${postulacion.foto})` }
        }>
        <p className="subtitulo">{postulacion.nombre}, {postulacion.apellido}</p><br/>
        <Link to={`/publicacion/${postulacion.id}`} className="descrip">{postulacion.descripcion}</Link>
    </div>

export default HomeTopSlider;