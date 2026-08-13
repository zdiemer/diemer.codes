{{/*
Fully-qualified resource name. Single-component chart, so no suffix.
*/}}
{{- define "diemer-codes.fullname" -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Standard labels applied to every resource.
*/}}
{{- define "diemer-codes.labels" -}}
app.kubernetes.io/name: diemer-codes
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
helm.sh/chart: {{ printf "%s-%s" .Chart.Name .Chart.Version }}
{{- end -}}

{{/*
Selector labels (stable across upgrades — never include Chart.Version).
*/}}
{{- define "diemer-codes.selectorLabels" -}}
app.kubernetes.io/name: diemer-codes
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}
