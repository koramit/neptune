<?php

namespace App\Actions;

use App\Models\Division;
use Exception;
use Rap2hpoutre\FastExcel\FastExcel;

class ImportDivisionAction
{
    /**
     * @throws Exception
     */
    public function __invoke(string $path): void
    {
        // check if $path is exists
        if (! file_exists($path)) {
            throw new Exception('File not found');
        }

        (new FastExcel())->import($path, function ($row) {
            Division::query()
                ->firstOrCreate([
                    'name' => $row['name'],
                    'department' => $row['department'],
                ]);
        });
    }
}
