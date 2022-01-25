import React, { useCallback, useState }  from "react";
import {
    Avatar,
    Button,
    Card,
    ResourceItem,
    ResourceList,
    TextStyle,
  } from "@shopify/polaris";
import books from "../../data/books";
import Add from "../../components/Add";
import Delete from "../../components/Delete";
import Edit from "../../components/Edit";

const Admin = () => {
    const [active, setActive] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);
    const [activeDelete, setActiveDelete] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = useCallback(() => setActive(!active), [active]);
    const handleEditChange = useCallback(() => setActiveEdit(!activeEdit), [activeEdit]);
    const handleDeleteChange = useCallback(() => setActiveDelete(!activeDelete), [activeDelete]);

    const resourceName = {
        singular: "book",
        plural: "books"
    };


    return(
        <div>
            <Card title="Admin dashboard" sectioned>
            <p>Admin have all Permissions </p>
            <Button onClick={handleChange} > Add Books </Button> 
                <ResourceList
                    resourceName={resourceName}
                    items={books}
                    renderItem={renderItem}
                    selectedItems={selectedItems}
                    onSelectionChange={setSelectedItems}
                    selectable
                />
            </Card>
        </div>
    );
    
    function renderItem(book) {
        const { id, name, author, price } = book;
        const media = <Avatar book size="medium" name={name} />;
    
        return (
          <div>  
            <ResourceItem
              id={id}
              media={media}
              accessibilityLabel={`View details for ${name}`}
            >
              <h3>
                <TextStyle variation="strong">Author: {author}</TextStyle>
              </h3>
              <div>Book: {name}</div>
              <div style={{fontWeight: 'bold'}}>Price: {price}</div> 
               <Add active={active} handleChange={handleChange}/>
               <Edit active={activeEdit} handleChange={handleEditChange}/> 
               <Delete active={activeDelete} handleChange={handleDeleteChange}/>            
              <Button onClick={handleEditChange} > Edit </Button>
              <Button onClick={handleDeleteChange} > Delete </Button>
            </ResourceItem>
            
           </div>
        );
      }
}

export default Admin;
