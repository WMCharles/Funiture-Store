export default function Login() {
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
                <div class="input-control">
                    <label for="password">Password</label>
                    <input type="password2" id="password2" name="password2" />
                </div>
                
                <div className="input-control">
                    <p className='p'>Don't have an account ? </p>
                </div>
            </form>
        </div>
    )
}
