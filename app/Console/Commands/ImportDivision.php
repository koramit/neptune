<?php

namespace App\Console\Commands;

use App\Actions\ImportDivisionAction;
use Exception;
use Illuminate\Console\Command;

class ImportDivision extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:division {path}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     * @throws Exception
     */
    public function handle()
    {
        $path = storage_path('app/uploads/excel/' . $this->argument('path'));

        (new ImportDivisionAction())($path);

        return Command::SUCCESS;
    }
}
