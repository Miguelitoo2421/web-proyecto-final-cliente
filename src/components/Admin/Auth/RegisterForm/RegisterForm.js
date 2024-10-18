import React from "react"
import {Form} from "semantic-ui-react"
import "./RegisterForm.scss"

export function RegisterForm(){
    return (
        <Form>
            <h1>Register Form</h1>
            <Form.Input name="email" placeholder="Correo electrónico"/>
            <Form.Input name="password" type="password" placeholder="Contraseña"/>
            <Form.Input name="repeatPassword" type="password" placeholder=" Repetir contraseña"/>
            <Form.Checkbox name="conditionsAccepted" label="He leído y acepto las políticas de privacidad"/>

            <Form.Button type="submit" primary fluid>
                Crear cuenta
            </Form.Button>

            <p className="register-form__error">Ha dado un error</p>
 
        </Form>
    )
}