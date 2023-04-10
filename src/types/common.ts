export type PurposeType =
  | 'General'
  | 'Academic'
  | 'Business'
  | 'Creative'
  | 'Diary'
  | 'Email'
  | 'Formal Statements'
  | 'School Application';

export type StyleType =
  | 'General'
  | 'Academic'
  | 'Analytical'
  | 'Argumentative'
  | 'Conversational'
  | 'Creative'
  | 'Critical'
  | 'Descriptive'
  | 'Epigrammatic'
  | 'Expository'
  | 'Instructive'
  | 'Journalistic'
  | 'Metaphorical'
  | 'Narrative'
  | 'Objective'
  | 'Satirical'
  | 'Subjective'
  | 'Technical';

export type ToneType =
  | 'General'
  | 'Advocatory'
  | 'Assertive'
  | 'Cold'
  | 'Confident'
  | 'Cynical'
  | 'Emotional'
  | 'Empathetic'
  | 'Formal'
  | 'Friendly'
  | 'Informal'
  | 'Ironic'
  | 'Optimistic'
  | 'Pessimistic'
  | 'Playful'
  | 'Sarcastic'
  | 'Satiric'
  | 'Sympathetic';

export type WritinOptionsType = {
  Purpose: PurposeType;
  Style: StyleType;
  Tone: ToneType;
};
