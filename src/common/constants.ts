// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Common constants
 */
export class Constants {
  public static readonly CHANNEL_NAME = "DTDL";
  public static readonly UTF8 = "utf8";
  public static readonly EMPTY_STRING = "";
  public static readonly COMPLETION_TRIGGER = '"';
  public static readonly JSON_SPACE = 2;
  public static readonly DEFAULT_RADIX = 10;
  public static readonly DEFAULT_TIMER_MS = 1000;
  public static readonly RESOURCE_FOLDER = "resources";
  public static readonly TEMPLATE_FOLDER = "templates";
  public static readonly DEFINITION_FOLDER = "definitions";
  public static readonly SAMPLE_FILE_NAME = "sample";
  public static readonly GRAPH_FILE_NAME = "graph.json";

  public static readonly DEVICE_MODEL_COMPONENT = "Device Model";
  public static readonly MODEL_NAME_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;
  public static readonly MODEL_NAME_REGEX_DESCRIPTION = "alphanumeric and underscore, not start with number";
  public static readonly MODEL_ID_PLACEHOLDER = "{modelId}";
  public static readonly MODEL_NAME_PLACEHOLDER = "{modelName}";

  public static readonly EXTENSION_ACTIVATED_MSG = "extensionActivated";
  public static readonly NOT_EMPTY_MSG = "could not be empty";

  public static readonly NSAT_SURVEY_URL = "https://aka.ms/vscode-iot-workbench-survey";
}
