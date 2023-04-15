import { Link as RouterLink } from 'react-router-dom';
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/index.js";
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startCreatingUser} from "../../store/auth/index.js";

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@') , 'El correo debe tener un @'],
    password: [(value) => value.length >= 6 , 'El password debe tener mas de 6 letras'],
    displayName: [(value) => value.length >= 1 , 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const [formSubmited, setFormSubmited] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth)
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations)
    const onSubmit = (event) => {
        event.preventDefault()
        setFormSubmited(true)

        if ( !isFormValid ) return
        dispatch( startCreatingUser(formState) )
    }

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField label="Nombre completo" type="text" placeholder="Nombre" fullWidth
                                   name="displayName" value={ displayName } onChange={ onInputChange }
                                   error={ !!displayNameValid && formSubmited} helperText={ formSubmited ? displayNameValid: '' } />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth
                                   name="email" value={ email } onChange={ onInputChange }
                                   error={ !!emailValid && formSubmited} helperText={ formSubmited ? emailValid: '' }/>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth
                                   name="password" value={ password } onChange={ onInputChange }
                                   error={ !!passwordValid && formSubmited } helperText={ formSubmited ? passwordValid: '' }/>
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none'}>
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth type="submit" disabled={ isCheckingAuth }>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="end">
                    <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
                    <Link component={ RouterLink } color="inherit" to="/auth/login">
                        Ingresar
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};

