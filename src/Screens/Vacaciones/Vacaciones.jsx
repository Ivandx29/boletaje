import React, { useState, useEffect } from 'react';
import { Layout, Input, Datepicker, Icon, NativeDateService, RangeDatepicker, Button, Toggle } from '@ui-kitten/components';
import { ScrollView } from 'react-native'
import tw from 'twrnc';
import { Controller, useForm } from 'react-hook-form';
import user from '../../../public/user.json';
import { i18n } from '../../../public/CalendarioEspaniol';


const localeDateService = new NativeDateService('es', { i18n, startDayOfWeek: 0 });


const Vacaciones = () => {

    const CalendarIcon = (props) => (<Icon{...props} name='calendar' />);

    const user1 = user
    const [nombre, setNombre] = useState('')
    const [fechaIngreso, setFechaIngreso] = useState(new Date());
    const [fechaSolicitud, setFechaSolicitud] = useState(new Date())
    const [periodoSolicitud, setPeriodoSolicitud] = useState({});
    const [presentarseDia, setPresentarseDia] = useState(Date.parse('2023-12-01T06:00:00.451Z'));
    const [checked, setChecked] = useState(false);

    const { control, formState: { errors }, reset, handleSubmit, setValue } = useForm();

    const fechaIngresoSeteo = () => {
        setValue('fechaIngreso', Date.parse(user1.fechaIngreso))
    }

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    //Setear la fecha a formato dd/mm/aaaa
    const formatDate = (date) => {
        const dia = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
        const mes = date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const fecha = `${dia}/${mes}/${date.getFullYear()}`;
        return fecha;
    };

    useEffect(() => {
        fechaIngresoSeteo()
    }, [])


    return (
        <ScrollView>
            <Layout style={tw`h-full w-full items-center`} >
                <Controller
                    name="nombre"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Nombre"
                            style={tw`text-base text-black h-15 w-92 my-3 border-4 rounded-xl`}
                            value={user1.nombre}
                            disabled
                            onChangeText={(dato) => {
                                field.onChange(dato);
                                setNombre(dato);
                            }}
                        />
                    )}
                ></Controller>
                <Controller
                    name="apellidoPaterno"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Apellido Paterno"
                            style={tw`text-base text-black h-15 w-92 my-3 border-4 rounded-xl`}
                            value={user1.apellidoPaterno}
                            disabled
                            onChangeText={(dato) => {
                                field.onChange(dato);
                                setNombre(dato);
                            }}
                        />
                    )}
                ></Controller>
                <Controller
                    name="apellidoMaterno"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Apellido Materno"
                            style={tw`text-base text-black h-15 w-92 my-3 border-4 rounded-xl`}
                            value={user1.apellidoMaterno}
                            disabled
                            onChangeText={(dato) => {
                                field.onChange(dato);
                                setNombre(dato);
                            }}
                        />
                    )}
                ></Controller>
                <Layout style={tw`items-center justify-center flex-row`} level='1'>
                    <Controller
                        name="fechaIngreso"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Datepicker
                                label='Fecha de Ingreso'
                                dateService={localeDateService}
                                style={tw`text-base text-black mx-8 my-3 rounded-xl`}
                                date={field.value}
                                disabled
                                onSelect={(yearInitial) => {
                                    setFechaIngreso(yearInitial);
                                    field.onChange(yearInitial);
                                }}
                                accessoryRight={CalendarIcon}
                            />
                        )}
                    ></Controller>
                    <Controller
                        name="fechaSolicitud"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Datepicker
                                label='Fecha de Solicitud'
                                dateService={localeDateService}
                                style={tw`text-base text-black mx-8 my-3 rounded-xl`}
                                date={fechaSolicitud}
                                disabled
                                onSelect={(yearInitial) => {
                                    setFechaSolicitud(yearInitial);
                                    field.onChange(yearInitial);
                                }}
                                accessoryRight={CalendarIcon}
                            />
                        )}
                    ></Controller>
                </Layout>
                {/* <Toggle
                    status='info'
                    checked={checked}
                    onChange={onCheckedChange}
                >
                    {`Solicitud: ${checked ? 'Vacaciones' : 'Justificante'}`}
                </Toggle> */}
                <Controller
                    name="periodoSolicitud"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <RangeDatepicker
                            // label={`Solicitud de ${checked ? 'Vacaciones' : 'Justificante'}`}
                            label='Solicitud de Vacaciones'
                            placeholder='Ingresa el rango de fecha'
                            status={fieldState.invalid ? "danger" : "basic"}
                            range={periodoSolicitud}
                            style={tw`text-base text-black h-15 w-92 my-3 rounded-xl`}
                            onSelect={nextRange => setPeriodoSolicitud(nextRange)}
                        />
                    )}
                ></Controller>
                <Controller
                    name="presentarseDia"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Datepicker
                            label='Presentarse el Dia'
                            dateService={localeDateService}
                            style={tw`text-base text-black h-15 w-92 my-3 rounded-xl`}
                            date={presentarseDia}
                            onSelect={(yearInitial) => {
                                setPresentarseDia(yearInitial);
                                field.onChange(yearInitial);
                            }}
                            accessoryRight={CalendarIcon}
                        />
                    )}
                ></Controller>
                <Layout style={tw`items-center justify-center flex-row`} level='1'>
                    <Controller
                        name="diasHabiles"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                label="Dias Habiles a Disfrutar"
                                style={tw`text-base text-black w-25 mx-3 my-3 rounded-xl`}
                                value={user1.diasHabiles}
                                disabled
                                onChangeText={(dato) => {
                                    field.onChange(dato);
                                    setNombre(dato);
                                }}
                            />
                        )}
                    ></Controller>
                    <Controller
                        name="diasRestantes"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                label="Dias Restantes a Disfrutar"
                                style={tw`text-base text-black w-25 mx-3 my-3 rounded-xl`}
                                value={user1.diasRestantes}
                                disabled
                                onChangeText={(dato) => {
                                    field.onChange(dato);
                                    setNombre(dato);
                                }}
                            />
                        )}
                    ></Controller>
                    <Controller
                        name="porAnio"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                label="Por el año"
                                style={tw`text-base text-black w-25 mx-3 my-3 rounded-xl`}
                                value={user1.porAnio}
                                disabled
                                onChangeText={(dato) => {
                                    field.onChange(dato);
                                    setNombre(dato);
                                }}
                            />
                        )}
                    ></Controller>
                </Layout >
                <Controller
                    name="diasDescanso"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Dias de Descanso"
                            style={tw`text-base text-black h-15 w-92 mx-3 my-3 rounded-xl`}
                            value={user1.diasDescanso}
                            disabled
                            onChangeText={(dato) => {
                                field.onChange(dato);
                                setNombre(dato);
                            }}
                        />
                    )}
                ></Controller>
                <Button style={tw`my-5 w-50 h-11 rounded-xl`}>Enviar Solicitud</Button>
            </Layout >
        </ScrollView>
    )
}


export default Vacaciones