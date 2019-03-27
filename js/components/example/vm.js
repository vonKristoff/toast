import template from '../../templates/example.html'
import classes from './computed-classes'
// Really useless example component
export default {
    name: "example",
    template,
    props: [],
    data() {
        return {
        	active: false
        }
    },
    computed: {
        ...classes
    }
}
