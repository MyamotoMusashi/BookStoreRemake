class User {
    #username = ''
    #password = ''
    #confirmPassword = ''
    #firstName = ''
    #lastName = ''
    #phone = ''
    #email = ''
    #shippingInformation = {}
    #billingInformation = {}

    constructor() {
    }

    getUsername() {
        return this.#username
    }

    setUsername(username) {
        this.#username = username
    }

    getPassword() {
        return this.#password
    }

    setPassword(password) {
        this.#password = password
    }

    getConfirmPassword() {
        return this.#confirmPassword
    }

    setConfirmPassword(confirmPassword) {
        this.#confirmPassword = confirmPassword
    }

    getFirstName() {
        return this.#firstName
    }

    setFirstName(firstName) {
        this.#firstName = firstName
    }

    getLastName() {
        return this.#lastName
    }

    setLastName(lastName) {
        this.#lastName = lastName
    }

    getPhone() {
        return this.#phone
    }

    setPhone(phone) {
        this.#phone = phone
    }

    getEmail() {
        return this.#email
    }

    setEmail(email) {
        this.#email = email
    }

    getShippingInformation() {
        return this.#shippingInformation
    }

    setShippingInformation(shippingInformation) {
        this.#shippingInformation = shippingInformation
    }

    getBillingInformation() {
        return this.#billingInformation
    }

    setBillingInformation(billingInformation) {
        this.#billingInformation = billingInformation
    }
}

export default User