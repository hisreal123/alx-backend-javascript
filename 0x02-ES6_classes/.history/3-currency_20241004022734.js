export default class Currency{
  constructor(code, name){
    this._code = code,
    this._name = name
  }

  //getter
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
    }
  }
}