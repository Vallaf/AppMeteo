import { requestGet } from '../utils/requestApi';

export const app = {
    state: {
        name: '',
        informations: {},
    },
    reducers: {
        setName(state, name) {
            return { ...state, name };
        },
        setInformations(state, informations) {
            return { ...state, informations };
        },
    },
        effects: (dispatch) => ({
        async getMeteoInformations(location) {
            console.log(location);
            if (location) {
                const { coords: { latitude, longitude } } = location;
                const lat = latitude;
                const lon = longitude;
                const response = await requestGet('weather', `lat=${lat}&lon=${lon}`);
                console.log(response);
                if (response) {
                    this.setInformations(response);
                }
            }
        }
    })
};
