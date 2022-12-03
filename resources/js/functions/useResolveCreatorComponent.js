import FormSelectCreator from '../Components/Controls/FormSelectCreator.vue';
import FormRadioGroupCardCreator from '../Components/Controls/FormRadioGroupCardCreator.vue';

export function useResolveCreatorComponent() {
    const resolveCreatorComponent = (name) => {
        if (name === 'FormSelectCreator') {
            return FormSelectCreator;
        } else if (name === 'FormRadioGroupCardCreator') {
            return FormRadioGroupCardCreator;
        }
    };

    return {resolveCreatorComponent};
}
