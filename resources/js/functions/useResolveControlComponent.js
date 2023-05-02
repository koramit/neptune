import FormInput from '../Components/Controls/FormInput.vue';
import FormRadio from '../Components/Controls/FormRadio.vue';
import FormSelect from '../Components/Controls/FormSelect.vue';
import FormCheckbox from '../Components/Controls/FormCheckbox.vue';
import FormTextarea from '../Components/Controls/FormTextarea.vue';
import FormRadioGroupCard from '../Components/Controls/FormRadioGroupCard.vue';
import FormAutocomplete from '../Components/Controls/FormAutocomplete.vue';

export function useResolveControlComponent() {
    const resolveControlComponent = (name) => {
        if (name === 'FormInput') {
            return FormInput;
        } else if (name === 'FormRadio') {
            return FormRadio;
        } else if (name === 'FormSelect') {
            return FormSelect;
        } else if (name === 'FormCheckbox') {
            return FormCheckbox;
        } else if (name === 'FormTextarea') {
            return FormTextarea;
        } else if (name === 'FormRadioGroupCard') {
            return FormRadioGroupCard;
        } else if (name === 'FormAutocomplete') {
            return FormAutocomplete;
        }
    };

    return {resolveControlComponent};
}
