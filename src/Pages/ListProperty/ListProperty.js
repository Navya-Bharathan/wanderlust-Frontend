import React from 'react'
import {Amenities,PropertyType,FunThingsTodo} from '../../Components/FilterComponents/Checkbox/Checkbox';

const ListProperty = () => {
  return (
    <div>
        <h2>Upload detaials Of the Property</h2>
        
        <div className='property-details'>
            <form>
            <label className="property-info">
                Property Name
                <input className="propertyinput" type="text" name="name" placeholder="Enter the name of the property" onChange={handleChange}  />
              </label>
              <label className="property-info">
                Property Address
                <input className="propertyinput" type="text" name="name" placeholder="Enter the address of the property" onChange={handleChange}  />
              </label>
              <label className="property-info">
                Location
                <input className="propertyinput" type="text" name="name" placeholder="Location" onChange={handleChange}  />
              </label>
              <label className="property-info">
                Country
                <input className="propertyinput" type="text" name="name" placeholder="Country" onChange={handleChange}  />
              </label>
              <label className="property-info">
                Upload Images
                <input id="images" type="file" multiple name="images" onChange={uploadImage} className="propertyinput" />
              </label>
              <PropertyType/>
              <Amenities />
              <FunThingsTodo />



              <button className="upload-btn" type="submit" onClick={handleSubmit}> Upload</button>

            </form>
        </div>
        <div className="image-preview-container">
            images
        </div>
    </div>
  )
}

export default ListProperty