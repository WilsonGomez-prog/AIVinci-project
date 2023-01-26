import { IPromptOption } from '../interfaces';

const designOptions: IPromptOption[] = [
    {
        name:'None',
        value: '',
        selected: false
    },
    {
        name:'standard',
        value: 'standard style',
        selected: false
    },
    {
        name:'Japanese anime',
        value: 'Japanese anime style',
        selected: false
    },
    {
        name:'Pixar movie',
        value: 'Pixar movie style',
        selected: false
    },
    {
        name:'cyber punk',
        value: 'cyber punk style',
        selected: false
    },
    {
        name:'steam punk',
        value: 'steam punk style',
        selected: false
    },
    {
        name:'waterhouse',
        value: 'waterhouse style',
        selected: false
    },
    {
        name:'bloodborne',
        value: 'bloodborne style',
        selected: false
    },
    {
        name:'grunge',
        value: 'grunge style',
        selected: false
    },
]

const artistOptions: IPromptOption[] = [
    {
        name:'None',
        value: '',
        selected: false
    },
    {
        name:'Andy Warhol',
        value: 'Andy Warhol style',
        selected: false
    },
    {
        name:'Da Vinci',
        value: 'Da Vinci style',
        selected: false
    },
    {
        name:'Salvador Dali',
        value: 'Salvador Dali style',
        selected: false
    },
    {
        name:'Picasso',
        value: 'Picasso style',
        selected: false
    }
]

const lightingOptions: IPromptOption[] = [
    {
        name:'None',
        value: '',
        selected: false
    },
    {
        name:'volumetric',
        value: 'volumetric lightning style',
        selected: false
    },
    {
        name:'cinematic',
        value: 'cinematic lightning style',
        selected: false
    },
    {
        name:'octane',
        value: 'octane lightning style',
        selected: false
    },
    {
        name:'softbox',
        value: 'softbox lightning style',
        selected: false
    },
    {
        name:'glowing lights',
        value: 'glowing lights lightning style',
        selected: false
    },
    {
        name:'blue',
        value: 'blue lightning style',
        selected: false
    },
    {
        name:'long exposure',
        value: 'long exposure lightning style',
        selected: false
    },
    {
        name:'fairy',
        value: 'fairy lightning style',
        selected: false
    },
]

const aspectRatioOptions: IPromptOption[] = [
    //Standard Ratio
    {
        name:'1:1',
        value: '--ar 1:1',
        selected: true
    },
    //Portrait
    {
        name:'9:16',
        value: '--ar 9:16',
        selected: false
    },
    {
        name:'4:5',
        value: '--ar 4:5',
        selected: false
    },
    {
        name:'3:4',
        value: '--ar 3:4',
        selected: false
    },
    {
        name:'2:3',
        value: '--ar 2:3',
        selected: false
    },
    {
        name:'10:16',
        value: '--ar 10:16',
        selected: false
    },
    //Landscape
    {
        name:'16:9',
        value: '--ar 16:9',
        selected: false
    },
    {
        name:'5:4',
        value: '--ar 5:4',
        selected: false
    },
    {
        name:'4:3',
        value: '--ar 4:3',
        selected: false
    },
    {
        name:'3:2',
        value: '--ar 3:2',
        selected: false
    }
]

const chaosOption: IPromptOption = {
    name: "chaos",
    value:"--chaos ",
    maxValue: 100,
    selected: false
}

const stylizeOption: IPromptOption = {
    name: "Stylize",
    value:"--stylize ",
    maxValue: 60000,
    selected: false
}

const qualityOption: IPromptOption = {
    name: "Quality",
    value:"--quality ",
    maxValue: 5,
    selected: false
}

export {
    designOptions,
    artistOptions,
    lightingOptions,
    aspectRatioOptions,
    chaosOption, 
    stylizeOption,
    qualityOption
}