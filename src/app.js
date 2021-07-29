Vue.use( vuelidate.default )

// For form_age
const minMaxAge = validators.between( 12, 120 )

new Vue( {
    el: '#root',

    /* DATA */
    data: {

        headerLogo: 'logo.png',
        background_image: 'background.jpg',

        /* Form Object */
        form_name: {
            name: null
        },
        form_age: {
            age: null
        },
        form_email: {
            email: null,
            newsletter: null
        },

        /* Form Success */
        form_name_success: false,
        form_age_success: false,
        form_email_success: false,

    },

    /* VALIDATIONS */
    validations: {
        form_name: {
            name: {
                required: validators.required // $v.form.name.required
            }
        },

        form_age: {
            age: {
                required: validators.required, // $v.form.age.required
                integer: validators.integer, // $v.form.age.integer
                minMaxAge // $v.form.age.minMaxAge
            }
        },

        form_email: {
            email: {
                email: validators.email,
                required: validators.requiredIf( function () {
                    return !!this.form_email.newsletter
                } )
            }
        }
    },

    /* METHODS */
    methods: {
        // Funzione per la validazione del campo
        // Deve avere un paramentro. Esempio: $v.form.email
        validClass ( fieldForm ) {
            return !fieldForm.$invalid && fieldForm.$model && fieldForm.$dirty
        },

        // Funzione per l'errore del campo
        // Deve avere un paramentro. Esempio: $v.form.email
        errorClass ( fieldForm ) {
            return fieldForm.$error
        },

        // Funzione Invia Form per il nome
        // Entra in funzione quando il bottone invia viene premuto
        sendForm_name () {
            this.$v.form_name.$touch()
            if ( !this.$v.form_name.$invalid ) {
                this.form_name_success = true;
                console.log( '📝 Form Submitted', this.form_name )
                
            } else {
                console.log( '❌ Invalid form' )
            }
        },
        // Funzione Invia Form per l'età
        // Entra in funzione quando il bottone invia viene premuto
        sendForm_age () {
            this.$v.form_age.$touch()
            if ( !this.$v.form_age.$invalid ) {
                console.log( '📝 Form Submitted', this.form_age )
            } else {
                console.log( '❌ Invalid form' )
            }
        },
        // Funzione Invia Form per la mail
        // Entra in funzione quando il bottone invia viene premuto
        sendForm_email () {
            this.$v.form_email.$touch()
            if ( !this.$v.form_email.$invalid ) {
                console.log( '📝 Form Submitted', this.form_email );

            } else {
                console.log( '❌ Invalid form' )
            }
        },

        // Funzione scroll to Top
        scrollToTop(){
            window.scrollTo(0, 1000);
        }
    }

} )