import FormInput from '../Components/Controls/FormInput.vue';
import FormRadio from '../Components/Controls/FormRadio.vue';
import FormSelect from '../Components/Controls/FormSelect.vue';
import FormCheckbox from '../Components/Controls/FormCheckbox.vue';
import FormTextarea from '../Components/Controls/FormTextarea.vue';

export function useResolveComponent() {
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
        }
    };

    return {resolveControlComponent};
}