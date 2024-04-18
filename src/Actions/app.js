import React from "react";
import * as actions from './action'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Table } from 'react-bootstrap'

let arr = []
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      status: false,
      insertPopup: false,
      updatePopup: false
    }
  }
  componentDidMount() {
    this.props.getProducts()
  }
  showPopup = (msg) => {
    if (msg === `addRec`) {
      this.setState({
        status: true,
        insertPopup: true,
        updatePopup: false
      })
    }
    else {
      this.setState({
        status: true,
        insertPopup: false,
        updatePopup: true
      })
    }
  }
  closePopup = () => {
    this.setState({
      status: false
    })
  }
  save = (e) => {
    e.preventDefault()
    if (this.state.insertPopup)
      this.insert(e)
    else
      this.update(e)
    this.closePopup()
  }
  insert = (e) => {
    let obj = {
      "p_id": parseInt(e.target.p_id.value),
      "p_name": e.target.p_name.value,
      "p_cost": parseInt(e.target.p_cost.value)
    }
    this.props.insertProduct(obj)
    this.setState({
      result: "Insert Success"
    })
    arr.push(obj)
  }
  update = (e) => {
    let obj = {
      "p_id": parseInt(e.target.p_id.value),
      "p_name": e.target.p_name.value,
      "p_cost": parseInt(e.target.p_cost.value)
    }
    this.props.updateProduct(obj)
    this.setState({
      result: "Update Success"
    })
    arr.forEach((e, i) => {
      if (e.p_id == obj.p_id) {
        e.p_name = obj.p_name
        e.p_cost = obj.p_cost
      }
    })
  }
  delette = (_id) => {
    this.props.deleteProduct(_id)
    this.setState({
      result: "Delete Success"
    })
    arr.splice(arr.findIndex((e, i) => {
      return e.p_id == _id
    }), 1)
  }
  render() {
    arr = this.props.data
    return (
      <div className='container mt-5'>
        <button className='btn btn-outline-primary mb-2'
          onClick={(() => { this.showPopup('addRec') })}>
          Add+
        </button>

        {/* -----  modal code start------- */}
        <Modal show={this.state.status}
          onHide={this.closePopup}
          size='sm'
          centered>
          <div className='modal-header'>
            <div className='modal-title'>Add / Update</div>
          </div>
          <div className='modal-body'>
            <form onSubmit={this.save}>
              <div className='form-group'>
                <label>P_ID</label>
                <input type='number'
                  className='form-control my-2'
                  placeholder='Enter P_ID'
                  name='p_id'></input>
              </div>

              <div className='form-group'>
                <label>P_NAME</label>
                <input type='text'
                  className='form-control my-2'
                  placeholder='Enter P_NAME'
                  name='p_name'></input>
              </div>

              <div className='form-group'>
                <label>P_COST</label>
                <input type='number'
                  className='form-control my-2'
                  placeholder='Enter P_COST'
                  name='p_cost'></input>
              </div>
              <input type='submit' value='Add / Update' className='btn btn-success m-3'></input>
              <button className='btn btn-danger m-3' onClick={this.closePopup}>Close</button>
            </form>
          </div>
        </Modal>
        {/* -----  table code start------- */}
        <Table bordered
          variant='warning'
          size='sm'
          hover
          striped
          className='text-center'>
          <thead>
            <tr>
              <th>Srno</th>
              <th>ID</th>
              <th>NAME</th>
              <th>COST</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((element, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td>{element.p_id} </td>
                <td>{element.p_name} </td>
                <td>{element.p_cost} </td>
                <td><i className='btn btn-outline-success btn-sm' onClick={() => { this.showPopup("update") }}> U </i> </td>
                <td><i className='btn btn-outline-danger btn-sm' onClick={() => { this.delette(element.p_id) }}> D </i> </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    )
  }
}
const receive = (state) => {
  return {
    data: state.data
  }
}

const send = (dispatch) => {
  return {
    getProducts: () => { dispatch(actions.getProducts()) },
    insertProduct: (record) => { dispatch(actions.insertProduct(record)) },
    updateProduct: (record) => { dispatch(actions.updateProduct(record)) },
    deleteProduct: (id) => { dispatch(actions.deleteProduct({ "p_id": id })) }
  }
}

export default connect(receive, send)(App)
