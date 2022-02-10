import { Modal } from "@shopify/polaris";
import React from "react";

const Delete = (props) => {
    const { active, handleChange } = props;

    return (
        <div>
            
            <Modal
                open={active}
                onClose={handleChange}
                primaryAction={{
                    content: 'Delete',
                    onAction: handleChange,
                }}
                secondaryActions={[
                    {
                        content: 'Close',
                        onAction: handleChange,
                    },
                ]}>
                <Modal.Section>
                    <div>
                        <h1 className="heading">Delete Page</h1>
                        <h2 style={{color: 'red', textAlign: 'center'}}>Are you Sure? You want to Delete</h2>
                    </div> 
                </Modal.Section>
            </Modal>

        </div>
    );
}
export default Delete;