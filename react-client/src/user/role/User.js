import React, { useState } from "react";
import {
    Avatar,
    Button,
    Card,
    ResourceItem,
    ResourceList,
    TextStyle
  } from "@shopify/polaris";

const User = () => {
    
    const [selectedItems, setSelectedItems] = useState([]);

    const resourceName = {
        singular: "customer",
        plural: "customers"
    };

    const items = [
        {
          id: 101,
          url: "customers/341",
          name: "Mae Jemison",
          location: "Decatur, USA"
        },
        {
          id: 201,
          url: "customers/256",
          name: "Ellen Ochoa",
          location: "Los Angeles, USA"
        }
      ];


    return(
        <div>
            <Card title="User dashboard" sectioned>
            <p>User have only Add  Permissions </p>
                <ResourceList
                    resourceName={resourceName}
                    items={items}
                    renderItem={renderItem}
                    selectedItems={selectedItems}
                    onSelectionChange={setSelectedItems}
                    selectable
                />
            </Card>
        </div>
    );
    
    function renderItem(item) {
        const { id, url, name, location } = item;
        const media = <Avatar customer size="medium" name={name} />;
    
        return (
          <div>  
            <ResourceItem
              id={id}
              url={url}
              media={media}
              accessibilityLabel={`View details for ${name}`}
            >
              <h3>
                <TextStyle variation="strong">Author: {name}</TextStyle>
              </h3>
              <div>Book:{location}</div>  
              <Button> Add </Button>            
            </ResourceItem>
            
           </div>
        );
      }
}

export default User;
