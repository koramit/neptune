<template>
    <InertiaHead :title="$page.props.flash.title" />
    <div class="min-h-full">
        <Disclosure
            as="nav"
            class="border-b border-slate-200 bg-white"
            v-slot="{ open }"
        >
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <RocketLaunchIcon class="h-8 w-8 text-sky-600" />
                        </div>
                        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                v-for="item in navigation"
                                :key="item.name"
                                :href="item.href"
                                :class="[item.current ? 'border-sky-500 text-slate-900' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined"
                            >{{ item.name }}</a>
                        </div>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:items-center">
                        <button
                            type="button"
                            class="rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            @click="$inertia.delete($page.props.appRoutes.logout)"
                        >
                            <span class="sr-only">View notifications</span>
                            <SignOutIcon
                                class="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>

                        <!-- Profile dropdown -->
                        <!--                        <Menu
                            as="div"
                            class="relative ml-3"
                        >
                            <div>
                                <MenuButton class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="h-8 w-8 rounded-full"
                                        :src="user.imageUrl"
                                        alt=""
                                    >
                                </MenuButton>
                            </div>
                            <transition
                                enter-active-class="transition ease-out duration-200"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem
                                        v-for="item in userNavigation"
                                        :key="item.name"
                                        v-slot="{ active }"
                                    >
                                        <a
                                            :href="item.href"
                                            :class="[active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700']"
                                        >{{ item.name }}</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>-->
                    </div>
                    <div class="-mr-2 flex items-center sm:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                            <span class="sr-only">Open main menu</span>
                            <BarsIcon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="sm:hidden">
                <div class="space-y-1 pt-2 pb-3">
                    <DisclosureButton
                        v-for="item in navigation"
                        :key="item.name"
                        as="a"
                        :href="item.href"
                        :class="[item.current ? 'bg-sky-50 border-sky-500 text-sky-700' : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined"
                    >
                        {{ item.name }}
                    </DisclosureButton>
                </div>
                <div class="border-t border-slate-200 pt-4 pb-3">
                    <div class="flex items-center px-4">
                        <div class="flex-shrink-0">
                            <!--                            <img
                                class="h-10 w-10 rounded-full"
                                :src="user.imageUrl"
                                alt=""
                            >-->
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-slate-800">
                                {{ user.name }}
                            </div>
                            <div class="text-sm font-medium text-slate-500">
                                {{ user.email }}
                            </div>
                        </div>
                        <button
                            type="button"
                            class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            @click="$inertia.delete($page.props.appRoutes.logout)"
                        >
                            <span class="sr-only">View notifications</span>
                            <SignOutIcon
                                class="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                    <div class="mt-3 space-y-1">
                        <DisclosureButton
                            v-for="item in userNavigation"
                            :key="item.name"
                            as="a"
                            :href="item.href"
                            class="block px-4 py-2 text-base font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                        >
                            {{ item.name }}
                        </DisclosureButton>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <div class="py-10">
            <header>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold leading-tight tracking-tight text-slate-900">
                        {{ $page.props.flash.title }}
                    </h1>
                </div>
            </header>
            <main>
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <!-- Replace with your content -->
                    <slot />
                    <!-- /End replace -->
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { InertiaHead } from '@inertiajs/inertia-vue3';
import { pageRoutines } from '../../functions/pageRoutines';
import SignOutIcon from '../Icons/SignOutIcon.vue';
import BarsIcon from '../Icons/BarsIcon.vue';
import XMarkIcon from '../Icons/XMarkIcon.vue';
import RocketLaunchIcon from '../Icons/RocketLaunchIcon.vue';

let user = {};
let navigation = [];
let userNavigation = [];

pageRoutines();
</script>
