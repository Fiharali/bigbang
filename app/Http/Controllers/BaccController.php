<?php

namespace App\Http\Controllers;

use App\Models\Bacc;
use App\Http\Requests\StoreBaccRequest;
use App\Http\Requests\UpdateBaccRequest;
use Illuminate\Support\Facades\Auth;

class BaccController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBaccRequest $request)
    {
        //
        // Bacc::create([
        //     'UnivercityName' => $request->university,
        //     'EtablisementName' => $request->etablessement,
        //     'Filere'=>$request->filere,
        //     'reserech_id'=> Auth::user(),
        // ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Bacc $bacc)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bacc $bacc)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBaccRequest $request, Bacc $bacc)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bacc $bacc)
    {
        //
    }
}
