use doggydaycare_db;

insert into dog (dog_name, owner_id, meds, shots)
values ("Spot", 2, "none", true);

insert into activity (dog_id, morning_walk, midday_walk, late_walk, med_info, notes)
values (1, true, false, false, "none", "likes to be petted");

insert into owner (owner_name, phone, alt_pickup_name)
values ("Wendi", "555-5555", "Eric");

insert into user (id, firstname, lastname, username, email, password, status)
values (1, "Night", "Day", "night@day.com", 1234, "active");
