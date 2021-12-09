class Article{

    static contadorArticle = 0;

    constructor(titulo, descripcion){
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._id = ++Article.contadorArticle;
    }
    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        this._titulo = titulo;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get id(){
        return this._id;
    }
}