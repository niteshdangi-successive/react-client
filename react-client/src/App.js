import React from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import Routers from "./route/route";

const App = () => {
    return(
        <div>
            <AppProvider i18n={enTranslations}>
            <Routers />
            </AppProvider>
        </div>
    );
}

export default App;
