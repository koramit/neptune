<?php

namespace App\Actions;

use App\Models\Division;
use App\Models\User;
use OpenSpout\Common\Exception\IOException;
use OpenSpout\Common\Exception\UnsupportedTypeException;
use OpenSpout\Reader\Exception\ReaderNotOpenedException;
use Rap2hpoutre\FastExcel\FastExcel;

class AttachDivisionUserAction
{
    /**
     * @throws IOException
     * @throws UnsupportedTypeException
     * @throws ReaderNotOpenedException
     */
    public function __invoke(User $user): void
    {
        $path = storage_path('app/uploads/excel/division_user.xlsx');

        if (! file_exists($path)) {
            return;
        }

        $divisions = (new FastExcel())->import($path);

        if (! $division = $divisions->firstWhere('org_id', $user->org_id)) {
            return;
        }

        if ($division = Division::query()->where('name', $division['division_name'])->first()) {
            $user->update(['division_id' => $division->id]);
        }
    }
}
