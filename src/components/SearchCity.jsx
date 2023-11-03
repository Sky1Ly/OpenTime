export const SearchCity = () => {
    return (
        <form>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese la ciudad"
                />
                
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                >
                    Buscar
                </button>
            </div>
        </form>
    )
}
