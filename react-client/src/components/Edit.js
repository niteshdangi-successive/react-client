import { Form, FormLayout, TextField, Modal } from "@shopify/polaris";
import React from "react";

const Edit = (props) => {
    const { active, handleChange } = props;

    return (
        <div>
            
            <Modal
                open={active}
                onClose={handleChange}
                primaryAction={{
                    content: 'Edit',
                    onAction: handleChange,
                }}
                secondaryActions={[
                    {
                        content: 'Close',
                        onAction: handleChange,
                    },
                ]}>
                <Modal.Section>
                    <Form>
                        <FormLayout>
                        <h1 className="heading">Welcome to Edit Page</h1>
                            <div className="textfield">
                                <TextField label="Book-Name" autoComplete="off" align="left" type="string" />
                                <br />
                                <TextField label="Author-Name" autoComplete="off" align="left" type="string" />
                                <br />
                                <TextField label="Price" autoComplete="off" align="left" type="string" />
                                <br />
                                <TextField label="Image Url" autoComplete="off" align="left" type="string" />
                            </div>
                        </FormLayout>
                    </Form>
                </Modal.Section>
            </Modal>

        </div>
    );
}
export default Edit;