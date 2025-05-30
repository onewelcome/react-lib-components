/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { format, Locale } from "date-fns";

export const THIRTY_SECONDS = "THIRTY_SECONDS";
export const ONE_MINUTE = "ONE_MINUTE";
export const FIVE_MINUTES = "FIVE_MINUTES";
export const ONE_HOUR = "ONE_HOUR";
export const TWENTY_FOUR_HOURS = "TWENTY_FOUR_HOURS";
export const CUSTOM_DATE_RANGE = "CUSTOM";

export const getMonthName = (date: Date, locale?: Locale) => format(date, "MMMM", { locale });

export const getYearFromDate = (date: Date) => format(date, "yyyy");

export const formatInputDate = (date: Date) => format(date, "yyyy-MM-dd HH:mm:ss");
