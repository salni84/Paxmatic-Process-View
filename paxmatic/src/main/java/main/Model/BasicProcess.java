package main.Model;

import javax.persistence.*;


@Entity
@Table(name="basicprocess")
public class BasicProcess {

    @Id
    @GeneratedValue Integer id;

    @Column(name = "processname")
    private String processname;

    @Column(name = "color")
    private String color;

    @Column(name = "form")
    private Integer form;

    @Column(name = "level")
    private Integer level;

    @Column(name = "position")
    private Integer position;

    @Column(name = "uuid")
    private Integer uuid;

    @Column(name = "verticalorder")
    private Integer verticalorder;

    @Column(name = "parent")
    private Integer parent;

    @Column(name = "visible")
    private Boolean visible;

    @Column(name = "bubble")
    private Boolean bubble;

    public Integer getId() {
        return id;
    }

    public String getProcessname() {
        return processname;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setProcessname(String name) {
        this.processname = name;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setForm(Integer form) {
        this.form = form;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    public void setUuid(Integer uuid) {
        this.uuid = uuid;
    }

    public void setVerticalorder(Integer order) {
        this.verticalorder = order;
    }

    public void setParent(Integer parent) {
        this.parent = parent;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

    public void setBubble(Boolean bubble) {
        this.bubble = bubble;
    }

    public String getColor() {
        return color;
    }

    public Integer getForm() {
        return form;
    }

    public Integer getLevel() {
        return level;
    }

    public Integer getPosition() {
        return position;
    }

    public Integer getUuid() {
        return uuid;
    }

    public Integer getVerticalorder() {
        return verticalorder;
    }

    public Integer getParent() {
        return parent;
    }

    public Boolean getVisible() {
        return visible;
    }

    public Boolean getBubble() {
        return bubble;
    }
}
