const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");


// ************ BASE DATA USERS ************ //
const db = require('../database/models');
const { Users } = db;


// ************ START CONTROLLER ************ //
const usersController = {

    login: (req, res) => {
        res.render("login");
    },

    processLogin: (req, res) => {
        const { errors } = validationResult(req);

        if (errors.length > 0) {
            return res.render("login", { errors, old: req.body });
        }
        else {
            let userToLogin = undefined;
            Users.findOne({
                where: { email: req.body.email }
            })
                .then((user) => {
                    userToLogin = user;
                    if (userToLogin) {
                        if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
                            req.session.userLogin = {
                                id: userToLogin.id,
                                email: userToLogin.email,
                                nombre: userToLogin.nombre,  //proceso de seguridad para proteger el password, solo asigno las propiedades necesarias.
                                rol: userToLogin.rol
                            }
                        }
                        else {
                            return res.render("login", {
                                errors: [
                                    {
                                        param: "credentialsInvalid",
                                        msg: "Contraseña incorrecta"
                                    }
                                ]
                            });
                        }
                    }
                    else {
                        return res.render("login", {
                            errors: [
                                {
                                    param: "credentialsInvalid",
                                    msg: "Usuario no registrado"
                                }
                            ]
                        });
                    }

                    if (req.body.rememberMe) {
                        res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2 }); //1° param: name cookie, 2°param: valor cookie y 3°param: duración.
                    }

                    res.redirect("/");
                })
                .catch(error => res.send(error));
        }
    },

    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    },

    listUsers: (req, res) => {
        Users.findAll()
            .then(users => {
                res.render('listUsers', { users })
            })
            .catch(error => res.send(error));
    },

    detail: (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                return res.render('detailUser', { user });
            })
            .catch(error => res.send(error));
    },

    edit: (req, res) => {
        Users.findByPk(req.params.id)
            .then((userToEdit) => {
                return res.render('editUser', { userToEdit });
            })
            .catch(error => res.send(error));
    },

    update: (req, res) => {

        if (req.file === undefined) {
            Users
                .update(
                    {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        rol: req.body.rol
                    },
                    {
                        where: { id: req.params.id }
                    })
                .then(() => {
                    return res.redirect('/users')
                })
                .catch(error => res.send(error));
        }
        else {
            Users
                .update(
                    {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        terminos: req.body.terminos,
                        rol: req.body.rol,
                        imagen: req.file.filename
                    },
                    {
                        where: { id: req.params.id }
                    })
                .then(() => {
                    return res.redirect('/users')
                })
                .catch(error => res.send(error));
        }
    },

    registro: (req, res) => {
        res.render("registro");
    },

    store: (req, res) => {

        const { errors } = validationResult(req);

        if (req.body.terminos === undefined) {
            res.render("registro", { terminos: "Debe aceptar los términos y condiciones", old: req.body })
        }
        else {
            if (errors.length > 0) {
                return res.render("registro", { errors, old: req.body });
            }
            else {
                Users.findOne({
                    where: { email: req.body.email }
                })
                    .then((user) => {
                        if (user) {
                            res.render("registro", { emailexiste: "El email ya se encuentra registrado", old: req.body })
                        }
                        else {
                            if (req.imagenusuario != undefined) {
                                Users.create(
                                    {
                                        nombre: req.body.nombre,
                                        apellido: req.body.apellido,
                                        email: req.body.email,
                                        password: bcryptjs.hashSync(req.body.password, 10),
                                        terminos: req.body.terminos,
                                        rol: "Cliente",
                                        imagen: req.file.filename
                                    })
                                    .then(() => {
                                        return res.redirect("/users/login");
                                    })
                                    .catch(error => res.send(error))
                            }
                            else {
                                Users.create(
                                    {
                                        nombre: req.body.nombre,
                                        apellido: req.body.apellido,
                                        email: req.body.email,
                                        password: bcryptjs.hashSync(req.body.password, 10),
                                        terminos: req.body.terminos,
                                        rol: "Cliente",
                                        imagen: "usuario-generico.png"
                                    })
                                    .then(() => {
                                        return res.redirect("/users/login");
                                    })
                                    .catch(error => res.send(error));
                            }
                        }
                    })
            }
        }
    },

    create: (req, res) => {
        Users
            .create(
                {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    terminos: req.body.terminos,
                    rol: req.body.rol,
                    imagen: req.file.filename
                }
            )
            .then(() => {
                return res.redirect("/users");
            })
            .catch(error => res.send(error))
    },

    destroy: (req, res) => {

        Users
        .destroy({where: {id: req.params.id}, force: true})   // force: true es para asegurar que se ejecute la acción
        .then( () => {return res.redirect('/users')
            })
        .catch(error => res.send(error));
    }
}

module.exports = usersController;