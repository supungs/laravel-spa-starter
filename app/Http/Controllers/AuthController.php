<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;

class AuthController extends Controller{
    public function __construct(JWTAuth $jwt){
        //$this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login() {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return jsend_fail(['user_not_found'], 404);
        }

        return $this->respondWithToken($token);
    }

    public function logout() {
        try {
            $token = JWTAuth::getToken();

            if ($token) {
                JWTAuth::invalidate($token);
            }

        } catch (JWTException $e) {
            return response()->json($e->getMessage(), 500);
        }

        return jsend_success(['message' => 'You are successfully logged out!']);
    }

    public function me(Request $request){
        return jsend_success(Auth::user());
    }

    public function check() {
        return jsend_success(['authenticated' => true]);
    }

    protected function respondWithToken($token) {
        $user = Auth::user();
        $data = [
            'token' => $token,
            'token_type' => 'bearer',
            'user_id' => $user['id'], 
            'user_name' => $user['name'],
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
        return jsend_success($data);
    }
}
