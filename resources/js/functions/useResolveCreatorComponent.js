import FormSelectCreator from '../Components/Controls/FormSelectCreator.vue';
import FormRadioGroupCardCreator from '../Components/Controls/FormRadioGroupCardCreator.vue';
import FormAutocompleteCreator from '../Components/Controls/FormAutocompleteCreator.vue';
import FormInputCreator from '../Components/Controls/FormInputCreator.vue';

export function useResolveCreatorComponent() {
    const resolveCreatorComponent = (name) => {
        if (name === 'FormSelectCreator') {
            return FormSelectCreator;
        } else if (name === 'FormRadioGroupCardCreator') {
            return FormRadioGroupCardCreator;
        } else if (name === 'FormAutocompleteCreator') {
            return FormAutocompleteCreator;
        } else if (name === 'FormInputCreator') {
            return FormInputCreator;
        }
    };

    return {resolveCreatorComponent};
}
