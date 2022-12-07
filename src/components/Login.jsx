export default function Login({handleClick}) {
    return (
        <div>
            <form id="form">
                <h1>Login</h1>
                <div class="input-control">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
               
                <div class="input-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>     
                <div className="input-control">
                    <button type="submit">Login</button>
                </div>           
                <div className="input-control">
                    <p className='p'>Don't have an account ? <span onClick={handleClick}>Sign Up</span> </p>
                </div>
            </form>
        </div>
    )
}
