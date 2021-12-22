
export function userValidator (user) {

    const types = ["admin","entregador","empresa"]

    if (!user.login) {
        return "User login is mandatory"
    }

    if (!user.password) {
        return "User password is mandatory"
    }

    if (!user.type) {
        return "User type is mandatory"
    }

    if (!types.includes(user.type)) {
        return "User type is invalid"
    }
}