Vue.use( vuelidate.default )

const minMaxAge = validators.between( 12, 120 )

new Vue( {
    el: '#root',

    /* DATA */
    data () {
        return {
            form: {
                name: null,
                age: null,
                email: null,
                newsletter: null
            }
        }
    },

    /* VALIDATIONS */
    validations: {
        form: {
            name: {
                required: validators.required // $v.form.name.required
            },

            age: {
                required: validators.required, // $v.form.age.required
                integer: validators.integer, // $v.form.age.integer
                minMaxAge // $v.form.age.minMaxAge
            },

            email: {
                email: validators.email,
                required: validators.requiredIf( function () {
                    return !!this.form.newsletter
                } )
            }
        }
    },

    /* METHODS */
    methods: {
        // Funzione per la validazione del campo
        // Deve avere un paramentro. Esempio: $v.form.email
        validClass ( field ) { 
            return !field.$invalid && field.$model && field.$dirty
        },

        // Funzione per l'errore del campo
        // Deve avere un paramentro. Esempio: $v.form.email
        errorClass ( field ) { 
            return field.$error
        },

        // Funzione Invia Form
        // Entra in funzione quando il bottone invia viene premuto
        sendForm () {
            this.$v.form.$touch()
            if ( !this.$v.form.$invalid ) {
                console.log( '📝 Form Submitted', this.form )
            } else {
                console.log( '❌ Invalid form' )
            }
        }
    }

} )