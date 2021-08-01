Vue.use( vuelidate.default )

// For form_name
//const format = validators.pattern("[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]+");

// For form_age
const minMaxAge = validators.between( 12, 120 )

new Vue( {
    el: '#root',

    /* DATA */
    data: {

        headerLogo: 'logo.png',
        background_image: 'background.jpg',
        displayMobile: false,
        windowWidth: 0,
        widthXs: 600,
        submitStatus: '',
        formAge: false,
        formEmail: false,
        checkBlock: false,
        pulsebottom: 'pulsebottom',

        /* Form Object */
        form_name: {
            name: null
        },
        form_age: {
            age: null
        },
        form_email: {
            email: null,
            newsletter: false
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
                required: validators.required, // $v.form.name.required
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

        /* Send Form */
        // Funzione Invia Form per il nome
        // Entra in funzione quando il button viene premuto
        sendForm_name () {
            this.$v.form_name.$touch()
            if ( !this.$v.form_name.$invalid ) {


                if ( this.submitStatus.length > 0 ) {
                    window.location.href = '#form-age';
                    this.submitStatus = '';
                } else {

                    this.form_name_success = true;
                    this.submitStatus = 'PENDING'
                    setTimeout( () => {
                        this.submitStatus = 'OK'
                    }, 1000 );
                    console.log( '📝 Form Submitted', this.form_name )

                }

            } else {
                console.log( '❌ Invalid form' )
            }
        },

        sendForm_age () {
            this.$v.form_age.$touch()
            if ( !this.$v.form_age.$invalid ) {

                if ( this.submitStatus.length > 0 ) {
                    window.location.href = '#form-email';
                    this.submitStatus = '';
                } else {
                    this.form_age_success = true;
                    this.submitStatus = 'PENDING'
                    setTimeout( () => {
                        this.submitStatus = 'OK'
                    }, 1000 );
                    console.log( '📝 Form Submitted', this.form_age );
                }

            } else {
                console.log( '❌ Invalid form' )
            }
        },

        sendForm_email () {
            this.$v.form_email.$touch()
            if ( !this.$v.form_email.$invalid ) {
                if ( this.submitStatus.length > 0 ) {
                    this.submitStatus = '';
                } else {
                    this.submitStatus = 'PENDING'
                    setTimeout( () => {
                        this.submitStatus = 'OK'
                    }, 1000 );
                    console.log( '📝 Form Submitted', this.form_email );
                }

            } else {
                console.log( '❌ Invalid form' )
            }
        },
        /* end Send Form */

        // Funzione toggle per aggiungere il check alla input 
        // per avere la padronanza sugli stili css della checkbox
        checkboxToggle () {
            this.form_email.newsletter = !this.form_email.newsletter;
            this.checkBlock = !this.checkBlock;
        },

        // Funzione che mi permette di vedere i width pixel 
        getWindowWidth () {
            this.windowWidth = document.documentElement.clientWidth;
        },

        // Funzioni per Nav
        formAgeTrue () {
            this.formAge = true;
            this.submitStatus = false;
        },

        formEmailTrue () {
            this.formEmail = true;
            this.submitStatus = false;
        },
    },

    // Rimuove l'evento in ascolto getWindowWidth
    /* TODO */
    beforeDestroy () {
        window.removeEventListener( 'resize', this.getWindowWidth );
    },

    /* MOUNTED */
    mounted () {
        // Funzione per monitorare la larghezza del monitor
        this.$nextTick( function () {
            window.addEventListener( 'resize', this.getWindowWidth );

            //Init
            this.getWindowWidth()
        } )

    }

} )