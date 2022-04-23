<template>
    <div id="status-login">
        <form>
            <h2 class="greenish-blue-text mt-5 mb-4 bolder">Ingresa a tu cuenta</h2>
            <!-- <div class="inline-alert"></div> -->
            <!-- Email -->
            <fieldset class="form-group darkgray-text bold">
                <legend class="col-form-label pt-0">Email</legend>
                <div>
                    <input type="text" placeholder="Ej: usuario@mail.com" class="form-control input-style">
                    <div class="inline-alert mt-3"></div>
                </div>
            </fieldset>
            <!-- Email END -->
            <!-- Contraseña -->
            <fieldset>
                <legend class="col-form-label pt-0">Contraseña</legend>
                <div>
                    <input type="text" placeholder="Escribe tu contraseña" class="form-control input-style">
                    <div class="inline-alert mt-3"></div>
                </div>
            </fieldset>
            <!-- Contraseña END -->
            <!-- Forgot Pass -->
            <div class="p1-0 mt-2 mb-2 link-decoration">
                <a class="gray-text forgot-pass">¿Olvidaste tu contraseña?</a>
            </div>
            <!-- Forgot Pass END -->
            <!-- Button -->
            <div class="col">
                <button class="btn btn-secondary btn-validate">
                    <div class="button-text">Ingresar a mi cuenta</div>
                </button>
            </div>
            <!-- Button END -->
        </form>
    </div>
</template>

<script>
export default {

}
</script>
