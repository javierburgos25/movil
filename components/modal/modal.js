import React from 'react';
import {CrearPlantilla} from '../parte-diario/crear-plantilla';
import {AgregarLabores} from '../parte-diario/agregar-labores';
import {TareasAsginados} from '../parte-diario/tareas-asignados';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export function ModalScreen({
  isModal,
  setIsModal,
  setIsReload,
  render,
  setLaboresAsignado,
  LaboresAsignado,
  thisEmpleado,
  navigation,
}) {
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModal}
          onRequestClose={() => {
            Alert.alert("Presione 'Cancelar' para salir del modal.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {render === 'Create-plantilla' && (
                <CrearPlantilla
                  setIsReload={setIsReload}
                  setIsModal={setIsModal}
                  navigation={navigation}
                />
              )}
              {render === 'Agregar-labores' && (
                <AgregarLabores
                  setLaboresAsignado={setLaboresAsignado}
                  LaboresAsignado={LaboresAsignado}
                  setIsModal={setIsModal}
                />
              )}
              {render === 'Actividades-asignados' && (
                <TareasAsginados
                  thisEmpleado={thisEmpleado}
                  setIsReload={setIsReload}
                  setIsModal={setIsModal}
                />
              )}

              <View
                style={{
                  borderBottom: 2,
                  borderBottomColor: '#cdcdcd',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              />

              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#EB5443'}}
                onPress={() => {
                  setIsModal(!isModal);
                }}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: '90%',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
