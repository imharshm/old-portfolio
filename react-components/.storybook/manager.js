import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({ 
    theme: create({ 
        brandTitle: "IMHARSHM", 
        brandImage: "",
        colorPrimary: 'hotpink',
        colorSecondary: 'deepskyblue',
        textColor: 'black',
        textInverseColor: 'rgba(255,255,255,0.9)',
    }), 
selectedPanel: 2,});
