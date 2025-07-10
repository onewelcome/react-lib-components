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

export interface ErrorNotification extends NotificationType {
  response?: string;
  type: "error";
}

export interface SuccessNotification extends NotificationType {
  response?: string;
  type: "success";
}

interface NotificationType {
  type: "error" | "success";
  status: HttpStatuses;
}

export type HttpStatuses = 200 | 500 | 400 | 401 | 403 | 404 | 501 | 502 | 503 | 504;

export interface AddNotification {
  type: "error" | "success";
  status: HttpStatuses;
  title?: string;
  message?: string;
}

export interface RemoveNotification {
  id: string;
}

export interface Notification<T extends NotificationType> {
  id?: string;
  type?: T["type"];
  status?: HttpStatuses;
  title?: string;
  message?: string;
  handled?: boolean;
}

export interface Translations {
  general: {
    error: string;
    success: string;
  };
  messages: {
    general: string;
    badRequest: string;
    unauthorized: string;
    forbidden: string;
    notFound: string;
    timeout: string;
    unavailable: string;
  };
}
