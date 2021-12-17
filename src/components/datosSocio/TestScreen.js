import React from 'react'

export const TestScreen = () => {
  return (
    <div className='row mt-5'>
      <div className='col-12 animate__animated animate__fadeIn'>
        <h5>Visualización de datos en Credencial Digital</h5>
        <div class="card text-white bg-info mb-3">
          <div class="card-body">
            <div className="row">
              <div className="col-md-4">
                <span>IC o Nro. de Socio</span>
                <input type="text" className="form-control"/>
              </div>
              <div className="col-md-4">
                <span>Beneficiarios</span>
                <select className="form-control">
                  <option></option>
                </select>
              </div>
              <div className="col-md-4 mt-4">
                <input type="button" className="btn btn-primary mr-2" value="Buscar"/>
                <input type="button" className="btn btn-primary" value="Limpiar búsqueda"/>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            Datos de contratación / personales
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Relación Familiar</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Apellidos</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Nombre</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Fecha de nacimiento</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Documentos</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Condicion de IVA</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Ult. Fecha de Actualización</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Código de acceso</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Fecha de creación</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Fecha de activación</span>
                  </div>
                  <input type="text" className="form-control" readOnly/>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="">Mails</span>
                  </div>                  
                </div>
                <input type="text" className="form-control" readOnly/>
                <input type="text" className="form-control" readOnly/>
                <input type="text" className="form-control" readOnly/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input type="button" className="btn btn-primary float-right mb-4" value="Ver Compartidas"/>
              </div>              
            </div>
            {/* 
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Options</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> 
            */}

          </div>
        </div>
        <div class="card mt-5">
          <div class="card-header">
            Compartidas Temporales
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>           
          </div>
        </div>
        <div class="card mt-5">
          <div class="card-header">
            Compartidas Permanentes
          </div>
          <div class="card-body">
          <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>           
          </div>
        </div>
      </div>
    </div>
  )
}
