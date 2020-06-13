import React from 'react';
import Table from '../../../components/table';
import Gallery from '../../../components/gallery';

class ApartmentDetails extends React.Component {
  render() {
    const { apartments } = this.props.apartments;
    const { id } = this.props.match.params;
    const details = apartments.find(item => id === item.id);
    return (
      <div>
        <h1>Apartment Details</h1>
        <Gallery data={details.pics} />
        <Table details={details} />
      </div>
    )
  }
}

export default ApartmentDetails;